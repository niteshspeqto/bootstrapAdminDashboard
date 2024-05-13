import {
  faCalendar,
  faClipboardList,
  faComments,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const EarningData = [
  {
    id: 0,
    title: "EARNINGS (MONTHLY)",
    amount: "$40,000",
    icon: faCalendar,
    borderColor: "#4e73df",
  },
  {
    id: 1,
    title: "EARNINGS (ANNUAL)",
    amount: "$215,000",
    icon: faDollarSign,
    borderColor: "#1cc88a",
  },
  {
    id: 2,
    title: "TASKS",
    progress: 50,
    icon: faClipboardList,
    borderColor: "#36b9cc",
  },
  {
    id: 3,
    title: "PENDING REQUESTS",
    requests: "18",
    icon: faComments,
    borderColor: "#f6c23e",
  },
];
export { EarningData };
