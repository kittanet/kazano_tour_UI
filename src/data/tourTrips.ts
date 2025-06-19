const calculateDays = (dateRange: string): string => {
  const [start, end] = dateRange.split(" - ");
  const year = end.split(", ")[1]; // Extract the year from the end date

  const startDate = new Date(`${start}, ${year}`);
  const endDate = new Date(`${end}`);

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  // If the start and end dates are the same, return only the start date
  if (diffDays === 0) {
    return `${start}, ${year}`;
  }

  // Otherwise, return the full date range with the number of days
  return `${dateRange} (${diffDays + 1} days)`;
};

const tourTrips = [
  {
    id: 1,
    name: "Explore the Alps",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    price: 1299.99,
    code: "ALP-001",
    zone: "Europe",
    dateRange: calculateDays("July 1 - July 10, 2025"),
  },
  {
    id: 2,
    name: "Safari Adventure",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80",
    price: 2499.99,
    code: "SAF-002",
    zone: "Africa",
    dateRange: calculateDays("August 15 - August 15, 2025"), // Same day
  },
  {
    id: 3,
    name: "Discover Japan",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&q=80",
    price: 1999.99,
    code: "JPN-003",
    zone: "Asia",
    dateRange: calculateDays("September 5 - September 15, 2025"),
  },
  {
    id: 4,
    name: "Caribbean Cruise",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    price: 1599.99,
    code: "CRU-004",
    zone: "Caribbean",
    dateRange: calculateDays("October 10 - October 20, 2025"),
  },
  {
    id: 5,
    name: "Northern Lights Tour",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=400&q=80",
    price: 1799.99,
    code: "NLT-005",
    zone: "Europe",
    dateRange: calculateDays("November 1 - November 7, 2025"),
  },
  {
    id: 6,
    name: "Great Barrier Reef Dive",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    price: 2299.99,
    code: "GBR-006",
    zone: "Australia",
    dateRange: calculateDays("December 1 - December 10, 2025"),
  },
  {
    id: 7,
    name: "Grand Canyon Hiking",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80",
    price: 999.99,
    code: "GCN-007",
    zone: "North America",
    dateRange: calculateDays("September 20 - September 25, 2025"),
  },
  {
    id: 8,
    name: "Machu Picchu Expedition",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80",
    price: 1899.99,
    code: "MPE-008",
    zone: "South America",
    dateRange: calculateDays("October 5 - October 15, 2025"),
  },
  {
    id: 9,
    name: "Antarctica Exploration",
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&q=80",
    price: 4999.99,
    code: "ANT-009",
    zone: "Antarctica",
    dateRange: calculateDays("December 15 - December 25, 2025"),
  },
];

export default tourTrips;