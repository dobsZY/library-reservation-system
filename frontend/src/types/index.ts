// Salon
export interface Hall {
  id: string;
  name: string;
  floor: number;
  description?: string;
  layoutWidth: number;
  layoutHeight: number;
  layoutBackgroundUrl?: string;
  layoutConfig?: HallLayoutConfig;
  centerLatitude?: number;
  centerLongitude?: number;
  allowedRadiusMeters: number;
  capacity: number;
  isActive: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  tables?: Table[];
}

export interface HallLayoutConfig {
  walls?: Array<{ x1: number; y1: number; x2: number; y2: number }>;
  doors?: Array<{ x: number; y: number; width: number; label?: string }>;
  windows?: Array<{ x: number; y: number; width: number; height: number; side: string }>;
  zones?: Array<{ id: string; name: string; polygon: number[][] }>;
}

// Masa Özellikleri
export interface TableFeature {
  id: string;
  code: string;
  name: string;
  icon: string;
  description?: string;
  displayOrder: number;
  isActive: boolean;
}

// Masa
export interface Table {
  id: string;
  hallId: string;
  tableNumber: string;
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  rotation: number;
  qrCode: string;
  status: TableStatus;
  isActive: boolean;
  notes?: string;
  features: TableFeature[];
  hall?: Hall;
  createdAt: string;
}

export type TableStatus = 'available' | 'maintenance' | 'reserved';

// Masa Doluluk Durumu (frontend için)
export interface TableAvailability {
  table: Table;
  isAvailable: boolean;
  currentLock?: TableLock;
  availableFrom?: string;
}

// Masa Kilidi
export interface TableLock {
  id: string;
  tableId: string;
  reservationId: string;
  lockDate: string;
  lockStart: string;
  lockEnd: string;
  status: 'active' | 'released' | 'cancelled';
}

// Rezervasyon
export interface Reservation {
  id: string;
  userId: string;
  tableId: string;
  hallId: string;
  reservationDate: string;
  startTime: string;
  endTime: string;
  lockEndTime: string;
  durationHours: number;
  isChain: boolean;
  chainId?: string;
  chainSequence: number;
  status: ReservationStatus;
  checkedInAt?: string;
  checkInLatitude?: number;
  checkInLongitude?: number;
  checkInDistanceMeters?: number;
  qrDeadline: string;
  table?: Table;
  hall?: Hall;
  createdAt: string;
}

export type ReservationStatus = 
  | 'pending' 
  | 'active' 
  | 'completed' 
  | 'extended' 
  | 'cancelled' 
  | 'expired' 
  | 'no_show';

// Çalışma Takvimi
export interface OperatingSchedule {
  id: string;
  name: string;
  scheduleType: 'normal' | 'exam_midterm' | 'exam_final' | 'holiday';
  startDate: string;
  endDate: string;
  is24h: boolean;
  openingTime: string;
  closingTime: string;
  maxDurationHours: number;
  chainQrTimeoutMinutes: number;
  isActive: boolean;
}

// İstatistikler
export interface HallOccupancy {
  hallId: string;
  hallName: string;
  floor: number;
  totalTables: number;
  occupiedTables: number;
  availableTables: number;
  occupancyRate: number;
  soonAvailable: number;
}

export interface OverallStatistics {
  totalHalls: number;
  totalTables: number;
  occupiedTables: number;
  availableTables: number;
  overallOccupancyRate: number;
  hallsOccupancy: HallOccupancy[];
  peakHours: Array<{ hour: number; occupancy: number }>;
}

// Kullanıcı İstatistikleri
export interface UserStats {
  hasActiveReservation: boolean;
  activeReservation: Reservation | null;
  canMakeNewReservation: boolean;
  canExtend: boolean;
  todayReservations: Reservation[];
}

// Hall Availability Response
export interface HallAvailabilityResponse {
  hall: Hall;
  tables: TableAvailability[];
  statistics: {
    total: number;
    available: number;
    occupied: number;
    occupancyRate: number;
  };
}

