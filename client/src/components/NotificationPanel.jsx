import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import moment from "moment";
import { Fragment, useState } from "react";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const data = [
  {
    _id: "65c5bbf3787832cf99f28e6d",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c27a0e18c0a1b750ad5cad",
      "65c30b96e639681a13def0b5",
    ],
    text: "New task has been assigned to you and 2 others. The task priority is set a normal priority, so check and act accordingly. The task date is Thu Feb 29 2024. Thank you!!!",
    task: null,
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T05:45:23.353Z",
    updatedAt: "2024-02-09T05:45:23.353Z",
    __v: 0,
  },
  {
    _id: "65c5f12ab5204a81bde866ab",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c30b96e639681a13def0b5",
      "65c317360fd860f958baa08e",
    ],
    text: "New task has been assigned to you and 2 others. The task priority is set a high priority, so check and act accordingly. The task date is Fri Feb 09 2024. Thank you!!!",
    task: {
      _id: "65c5f12ab5204a81bde866a9",
      title: "Test task",
    },
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T09:32:26.810Z",
    updatedAt: "2024-02-09T09:32:26.810Z",
    __v: 0,
  },
];
const ICONS = {
  alert: (
    <HiBellAlert className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
  ),
  message: (
    <BiSolidMessageRounded className="w-5 h-5 text-gray-600 group-hover:text-indigo-600" />
  ),
};

const NotificationPanel = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  //  const { data, refetch } = useGetNotificationsQuery();
  //  const [markAsRead] = useMarkNotiAsReadMutation();

  const readHandler = () => {};
  const viewHandler = () => {};

  const callsToAction = [
    { name: "Cancel", href: "#", icon: "" },
    {
      name: "Mark All Read",
      href: "#",
      icon: "",
      onClick: () => readHandler("all", ""),
    },
  ];

  return (
    <>
      <Popover className="relative">
        <PopoverButton className="inline-flex items-center outline-none">
          <div className="flex relative justify-center items-center w-8 h-8 text-gray-800">
            <IoIosNotificationsOutline className="text-2xl" />
            {data?.length > 0 && (
              <span className="absolute top-0 right-1 w-4 h-4 text-sm font-semibold text-center text-white bg-red-600 rounded-full">
                {data?.length}
              </span>
            )}
          </div>
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="flex absolute -right-16 z-10 px-4 mt-5 w-screen max-w-max md:-right-2">
            {({ close }) =>
              data?.length > 0 && (
                <div className="overflow-hidden flex-auto w-screen max-w-md text-sm leading-6 bg-white rounded-3xl ring-1 shadow-lg ring-gray-900/5">
                  <div className="p-4">
                    {data?.slice(0, 5).map((item, index) => (
                      <div
                        key={item._id + index}
                        className="flex relative gap-x-4 p-4 rounded-lg group hover:bg-gray-50"
                      >
                        <div className="flex justify-center items-center mt-1 w-8 h-8 bg-gray-200 rounded-lg group-hover:bg-white">
                          {ICONS[item.notiType]}
                        </div>

                        <div
                          className="cursor-pointer"
                          onClick={() => viewHandler(item)}
                        >
                          <div className="flex gap-3 items-center font-semibold text-gray-900 capitalize">
                            <p> {item.notiType}</p>
                            <span className="text-xs font-normal lowercase">
                              {moment(item.createdAt).fromNow()}
                            </span>
                          </div>
                          <p className="mt-1 text-gray-600 line-clamp-1">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 bg-gray-50 divide-x">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        onClick={
                          item?.onClick ? () => item.onClick() : () => close()
                        }
                        className="flex gap-x-2.5 justify-center items-center p-3 font-semibold text-blue-600 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
          </PopoverPanel>
        </Transition>
      </Popover>
    </>
  );
};

export default NotificationPanel;
