type UserTableType = {
  id: number;
  user: {
    image: string;
    name: string;
    email: string;
    specialization: string[];
    licenseNumber: string;
    prcNumber?: string;
    createdAt: string;

  };
  status: string;
}

export type { UserTableType };