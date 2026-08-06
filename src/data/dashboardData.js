export const dashboardStats = [
  {
    title: "Total Revenue",
    value: "$125,450",
    color: "#2563eb",
  },
  {
    title: "Customers",
    value: "4,520",
    color: "#16a34a",
  },
  {
    title: "Orders",
    value: "1,845",
    color: "#ea580c",
  },
  {
    title: "Growth",
    value: "+18%",
    color: "#9333ea",
  },
];

export const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 18000, 15000, 25000, 22000, 30000],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export const salesData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "Sales",
      data: [35, 45, 60, 55, 70, 80],
      backgroundColor: "#16a34a",
    },
  ],
};

export const pieData = {
  labels: ["Electronics", "Fashion", "Furniture"],
  datasets: [
    {
      data: [45, 30, 25],
      backgroundColor: ["#2563eb", "#16a34a", "#ea580c"],
    },
  ],
};
export const recentOrders = [
  {
    id: "#1001",
    customer: "Ali Khan",
    product: "Laptop",
    amount: "$1,250",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Ahmed Raza",
    product: "Headphones",
    amount: "$180",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Sara Ahmed",
    product: "Monitor",
    amount: "$420",
    status: "Completed",
  },
  {
    id: "#1004",
    customer: "Hamza Ali",
    product: "Keyboard",
    amount: "$95",
    status: "Cancelled",
  },
];

export const recentActivities = [
  {
    id: 1,
    action: "New customer registered",
    time: "5 minutes ago",
  },
  {
    id: 2,
    action: "Order #1005 completed",
    time: "20 minutes ago",
  },
  {
    id: 3,
    action: "Monthly report generated",
    time: "1 hour ago",
  },
  {
    id: 4,
    action: "Payment received",
    time: "2 hours ago",
  },
];

export const topProducts = [
  {
    id: 1,
    name: "Laptop",
    sales: 520,
    progress: 90,
  },
  {
    id: 2,
    name: "Smartphone",
    sales: 480,
    progress: 80,
  },
  {
    id: 3,
    name: "Headphones",
    sales: 340,
    progress: 65,
  },
  {
    id: 4,
    name: "Keyboard",
    sales: 290,
    progress: 55,
  },
  {
    id: 5,
    name: "Mouse",
    sales: 210,
    progress: 40,
  },
];