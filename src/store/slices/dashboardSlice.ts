import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TableData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  revenue: number;
}

export interface ChartData {
  month: string;
  revenue: number;
  users: number;
  orders: number;
}

export interface MetricData {
  title: string;
  value: string;
  change: string;
  type: 'increase' | 'decrease' | 'neutral';
}

interface DashboardState {
  tableData: TableData[];
  chartData: ChartData[];
  metrics: MetricData[];
  loading: boolean;
  searchTerm: string;
  sortField: keyof TableData;
  sortDirection: 'asc' | 'desc';
  currentPage: number;
  itemsPerPage: number;
  filterStatus: 'all' | 'active' | 'inactive' | 'pending';
}

// Mock data
const mockTableData: TableData[] = [
  { id: '1', name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15', revenue: 12500 },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Manager', status: 'active', joinDate: '2024-02-03', revenue: 8900 },
  { id: '3', name: 'Mike Davis', email: 'mike@example.com', role: 'User', status: 'inactive', joinDate: '2024-01-28', revenue: 5400 },
  { id: '4', name: 'Lisa Wilson', email: 'lisa@example.com', role: 'User', status: 'pending', joinDate: '2024-03-10', revenue: 3200 },
  { id: '5', name: 'David Brown', email: 'david@example.com', role: 'Manager', status: 'active', joinDate: '2024-02-20', revenue: 7800 },
  { id: '6', name: 'Emma Taylor', email: 'emma@example.com', role: 'User', status: 'active', joinDate: '2024-03-05', revenue: 4600 },
  { id: '7', name: 'James Anderson', email: 'james@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-10', revenue: 15200 },
  { id: '8', name: 'Anna Martinez', email: 'anna@example.com', role: 'User', status: 'inactive', joinDate: '2024-02-15', revenue: 2100 },
];

const mockChartData: ChartData[] = [
  { month: 'Jan', revenue: 45000, users: 1200, orders: 340 },
  { month: 'Feb', revenue: 52000, users: 1350, orders: 410 },
  { month: 'Mar', revenue: 48000, users: 1280, orders: 380 },
  { month: 'Apr', revenue: 61000, users: 1520, orders: 490 },
  { month: 'May', revenue: 55000, users: 1430, orders: 450 },
  { month: 'Jun', revenue: 67000, users: 1680, orders: 520 },
];

const mockMetrics: MetricData[] = [
  { title: 'Total Revenue', value: '$328,000', change: '+12.5%', type: 'increase' },
  { title: 'Active Users', value: '8,460', change: '+8.2%', type: 'increase' },
  { title: 'Total Orders', value: '2,590', change: '-3.1%', type: 'decrease' },
  { title: 'Conversion Rate', value: '3.24%', change: '+0.8%', type: 'increase' },
];

const initialState: DashboardState = {
  tableData: mockTableData,
  chartData: mockChartData,
  metrics: mockMetrics,
  loading: false,
  searchTerm: '',
  sortField: 'name',
  sortDirection: 'asc',
  currentPage: 1,
  itemsPerPage: 5,
  filterStatus: 'all',
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
    },
    setSortField: (state, action: PayloadAction<keyof TableData>) => {
      if (state.sortField === action.payload) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortField = action.payload;
        state.sortDirection = 'asc';
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },
    setFilterStatus: (state, action: PayloadAction<'all' | 'active' | 'inactive' | 'pending'>) => {
      state.filterStatus = action.payload;
      state.currentPage = 1;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setSortField,
  setCurrentPage,
  setItemsPerPage,
  setFilterStatus,
  setLoading,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;