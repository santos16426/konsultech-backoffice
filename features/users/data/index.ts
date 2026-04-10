import { UserTableType } from "../types/userTable";

export const data: UserTableType[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      email: "lindsey@gmail.com",
      specialization: ["Cardiologist", "Pediatrician"],
      licenseNumber: "1234567890",
      prcNumber: "1234567890",
      createdAt: "2026-01-01",
    },

    status: "Verified",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      email: "kaiya@gmail.com",
      specialization: ["Cardiologist", "Pediatrician"],
      licenseNumber: "1234567890",
      createdAt: "2026-01-01",
    },
    status: "For Review",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      email: "zain@gmail.com",
      specialization: ["Cardiologist", "Pediatrician"],
      licenseNumber: "1234567890",
      createdAt: "2026-01-01",
    },

    status: "Rejected",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      email: "abram@gmail.com",
      specialization: ["Cardiologist", "Pediatrician"],
      licenseNumber: "1234567890",
      prcNumber: "1234567890",
      createdAt: "2026-01-01",
    },

    status: "For Review",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      email: "carla@gmail.com",
      specialization: ["Cardiologist", "Pediatrician"],
      licenseNumber: "1234567890",
      prcNumber: "1234567890",
      createdAt: "2026-01-01",
    },
    status: "Verified",
  },
];