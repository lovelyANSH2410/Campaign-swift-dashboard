import React, { useState } from "react";
import Sort from "./Sort/Sort";
import AddCampaign from "./Campaign/AddCampaign";
import AllCampaign from "./Campaign/AllCampaign";
import Show from "./Show";

const Options = () => {
  const [sort, setSort] = useState(false);
  const [addCampaign, setAddCampaign] = useState(false);

  const handleSort = () => {
    setSort(!sort);
  };

  const handleCampaign = () => {
    setAddCampaign(true);
  };

  const allCampaign = () => {
    setAddCampaign(false);
  }

  return (
    <div className="flex w-[97%] h-screen">
      <div className="w-[16%] shadow-md bg-[#ECF1FE]">
        <div className="font-semibold px-6 py-7 border border-b-white">
          <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
            <div>
              <i class="uil uil-calender mr-4 text-gray-400"></i> Today
            </div>{" "}
            <>2</>
          </div>
          <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
            <div>
              <i class="uil uil-calender mr-4 text-gray-400"></i> Next 7 Days
            </div>{" "}
            <>7</>
          </div>
          <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
            <div>
              <i class="uil uil-calender mr-4 text-gray-400"></i> Job Queue
            </div>{" "}
            <>1</>
          </div>
        </div>
        {sort && <Sort />}
        <div className="p-4 border pb-10 border-b-white">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Campaign List</p>
            <i class="uil uil-plus-square text-gray-400"></i>
          </div>
          <div className="p-2 font-semibold">
            <div
              className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500 cursor-pointer"
              onClick={allCampaign}
            >
              <div>
                <i class="uil uil-bars mr-4 text-gray-400"></i> All Campaigns
              </div>{" "}
              <>0</>
            </div>
            <div
              className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500 cursor-pointer"
              onClick={handleCampaign}
            >
              <div>
                <i class="uil uil-bars mr-4 text-gray-400"></i> My First
                campaign
              </div>{" "}
              <>0</>
            </div>
          </div>
        </div>
        <div className="p-4 border border-b-white">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">My Space</p>
            <i class="uil uil-plus-square text-gray-400 hidden"></i>
          </div>
          <div className="p-2 font-semibold">
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-bars mr-4"></i> My Notes
              </div>{" "}
              <>0</>
            </div>
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-bars mr-4"></i> My To-Do's
              </div>{" "}
              <>0</>
            </div>
          </div>
        </div>
        <div className="p-4 border border-b-white">
          <div className="flex justify-between">
            <p className="text-sm text-gray-400">Filters</p>
            <i class="uil uil-plus-square text-gray-400"></i>
          </div>
          <div className="p-2 font-semibold">
            <div
              className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500 cursor-pointer"
              onClick={handleSort}
            >
              <div>
                <i class="uil uil-comment-alt-lines mr-4"></i> Associates
              </div>{" "}
              <>7</>
            </div>
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-comment-alt-lines mr-4"></i> Tags
              </div>{" "}
              <>7</>
            </div>
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-comment-alt-lines mr-4"></i> Prorite
              </div>{" "}
              <>7</>
            </div>
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-comment-alt-lines mr-4"></i> Company
              </div>{" "}
              <>7</>
            </div>
            <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
              <div>
                <i class="uil uil-comment-alt-lines mr-4"></i> Status
              </div>{" "}
              <>7</>
            </div>
          </div>
        </div>
        <div className="px-6 font-semibold py-4">
          <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
            <div>
              <i class="uil uil-check-circle mr-4 text-gray-400"></i> Completed
            </div>
          </div>
          <div className="flex justify-between p-2 hover:bg-white rounded-md transition duration-500">
            <div>
              <i class="uil uil-trash mr-4 text-gray-400"></i> Trash
            </div>
          </div>
        </div>
      </div>
      <div className="w-[42%]">
        {addCampaign ? <AddCampaign /> : <AllCampaign />}
      </div>
      <div className="w-[42%]">
        <Show />
      </div>
    </div>
  );
};

export default Options;
