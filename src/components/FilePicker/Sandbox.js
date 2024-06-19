import React, { useState, useEffect } from "react";
import { Dropbox } from "dropbox";
import "./styles.css";

const APP_KEY = "42ajpj4p4271ic9"; // Replace with your app key

export default function App() {
  const [files, setFiles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleAuthMessage = (event) => {
      if (event.origin === window.location.origin) {
        const { access_token } = event.data;
        if (access_token) {
          console.log("Access token received:", access_token);
          setAccessToken(access_token);
          setIsAuthenticated(true);
          fetchUserEmail(access_token);
        }
      }
    };

    window.addEventListener("message", handleAuthMessage);

    return () => window.removeEventListener("message", handleAuthMessage);
  }, []);

  const fetchUserEmail = async (token) => {
    const dbx = new Dropbox({ accessToken: token });
    try {
      const response = await dbx.usersGetCurrentAccount();
      console.log("User account info:", response);
      setEmail(response.email);
    } catch (error) {
      console.error("Error fetching user email: ", error);
    }
  };

  const handleSuccess = (chosenFiles) => {
    console.log("Files chosen:", chosenFiles);
    setFiles(chosenFiles);
  };

  const handleLogin = () => {
    const authUrl = `https://www.dropbox.com/oauth2/authorize?response_type=token&client_id=${APP_KEY}&redirect_uri=${window.location.origin}`;

    const width = 800;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    const authWindow = window.open(
      authUrl,
      "DropboxAuth",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const handleAuthWindowClose = setInterval(() => {
      console.log("called");
      try {
        const hash = authWindow.location.hash;
        if (hash) {
          const token = new URLSearchParams(hash.substring(1)).get(
            "access_token"
          );
          if (token) {
            setAccessToken(token);
            setIsAuthenticated(true);
            fetchUserEmail(token);
            clearInterval(handleAuthWindowClose);
            authWindow.close();
          }
        }
      } catch (error) {
        // Ignore DOMException for cross-origin access until the window is closed
      }

      if (authWindow.closed) {
        clearInterval(handleAuthWindowClose);
      }
    }, 1000);
  };

  const openChooser = () => {
    if (window.Dropbox) {
      window.Dropbox.choose({
        success: handleSuccess,
        cancel: () => console.log("Chooser closed"),
        linkType: "direct",
        multiselect: true,
        extensions: [".pdf", ".doc", ".docx"],
      });
    } else {
      console.error("Dropbox chooser is not available");
    }
  };

  return (
    <div className="App">
      <h1>Hello Dropbox</h1>
      {!isAuthenticated && (
        <button onClick={handleLogin}>Login with Dropbox</button>
      )}
      {isAuthenticated && (
        <>
          <p>Logged in as: {email}</p>
          <button onClick={openChooser}>Choose from Dropbox</button>
        </>
      )}
      {files.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a href={file.link} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
