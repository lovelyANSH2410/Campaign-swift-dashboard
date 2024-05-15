import React from "react";

const Options = () => {
  return (
    <div className="w-[17%] shadow-md bg-blue-100">
      <div className="font-semibold px-10 py-7 border border-b-white">
        <div className="flex justify-between mb-4">
          <div>
            <i class="uil uil-calender mr-4 text-gray-400"></i> Today
          </div>{" "}
          <>2</>
        </div>
        <div className="flex justify-between my-4">
          <div>
            <i class="uil uil-calender mr-4 text-gray-400"></i> Next 7 Days
          </div>{" "}
          <>7</>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <i class="uil uil-calender mr-4 text-gray-400"></i> Job Queue
          </div>{" "}
          <>1</>
        </div>
      </div>
      <div className="p-4 border border-b-white">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">Campaign List</p>
          <i class="uil uil-plus-square text-gray-400"></i>
        </div>
        <div className="p-6 font-semibold">
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-bars mr-4 text-gray-400"></i> All Campaigns
            </div>{" "}
            <>0</>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-bars mr-4 text-gray-400"></i> My First campaign
            </div>{" "}
            <>0</>
          </div>
        </div>
      </div>
      <div className="p-4 border border-b-white">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">My Space</p>
          <i class="uil uil-plus-square text-gray-400"></i>
        </div>
        <div className="p-6 font-semibold">
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-bars mr-4"></i> My Notes
            </div>{" "}
            <>0</>
          </div>
          <div className="flex justify-between mb-4">
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
        <div className="p-6 font-semibold">
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-comment-alt-lines mr-4"></i> Associates
            </div>{" "}
            <>7</>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-comment-alt-lines mr-4"></i> Tags
            </div>{" "}
            <>7</>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-comment-alt-lines mr-4"></i> Prorite
            </div>{" "}
            <>7</>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-comment-alt-lines mr-4"></i> Company
            </div>{" "}
            <>7</>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <i class="uil uil-comment-alt-lines mr-4"></i> Status
            </div>{" "}
            <>7</>
          </div>
        </div>
      </div>
      <div className="px-10 font-semibold py-4">
        <div className="flex justify-between mb-4">
          <div>
          <i class="uil uil-check-circle mr-4 text-gray-400"></i> Completed
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div>
            <i class="uil uil-trash mr-4 text-gray-400"></i> Trash
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
