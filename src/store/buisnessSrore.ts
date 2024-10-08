import { create } from 'zustand';
import axios from 'axios';

// Define the structure of the business state
interface BusinessState {
  isLoading: boolean;
  error: string | null;
  business: any | null;
  addBusiness: (businessData: any) => Promise<any>;
  updateBusiness: (businessId: string, businessData: any) => Promise<any>;
  fetchBusiness: (businessId: string) => Promise<any>;
}

// Business store using Zustand
const useBusinessStore = create<BusinessState>((set) => ({
  isLoading: false,
  error: null,
  business: null,

  // Function to add a new business
  addBusiness: async (businessData) => {
    set({ isLoading: true, error: null });
    try {
      // Retrieve the user_id from localStorage
      const userId = localStorage.getItem('user_id');

      // Include user_id in the business data
      const businessPayload = {
        ...businessData,
        user_id: userId,
      };

      const response = await axios.post(
        'http://localhost:4000/api/business/',
        businessPayload
      );
      set({ isLoading: false, business: response.data });
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Failed to add business';
      set({ isLoading: false, error: errorMessage });
      throw new Error(errorMessage);
    }
  },

  // Function to update an existing business
  updateBusiness: async (businessId, businessData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put(
        `http://localhost:4000/api/business/${businessId}`,
        businessData
      );
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Failed to update business';
      set({ isLoading: false, error: errorMessage });
      throw new Error(errorMessage);
    }
  },

  fetchBusiness: async (businessId: string) => {
    set({ isLoading: true, error: null });
    try {
      const userId = localStorage.getItem('user_id');
      if (!userId) throw new Error('User ID not found in local storage');
      const response = await axios.get(
        `http://localhost:4000/api/business/${businessId}`
        // { params: { user_id: userId } }
      );
      set({ isLoading: false, business: response.data });
      return response.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Failed to fetch business details';
      set({ isLoading: false, error: errorMessage });
      throw new Error(errorMessage);
    }
  },
}));

export default useBusinessStore;
