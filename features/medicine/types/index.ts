interface MedicineRecord {
  id: number;
  genericName: string;
  brandName: string;
}

interface MedicineGroupedRecord {
  [genericName: string]: boolean;
}

export type { MedicineGroupedRecord, MedicineRecord };
