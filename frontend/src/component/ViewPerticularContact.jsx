import React from "react";

const ViewPericularContact=({setOpen,selectedContact})=>{
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50 opacity-100">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-2xl w-full p-5">
            <div className="flex justify-between border-b pb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedContact.name}</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>
            <div className="flex justify-end border-t pt-3 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
              >
                I accept
              </button>
              <button
                onClick={() => setOpen(false)}
                className="ml-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
    )
}
export default ViewPericularContact;
