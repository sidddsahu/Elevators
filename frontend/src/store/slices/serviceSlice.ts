

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// /* =========================
//    API CONFIG
// ========================= */
// const API_URL = "https://siddhant-web.onrender.com/api/services";

// /* =========================
//    ASYNC THUNKS (CRUD)
// ========================= */

// // CREATE
// export const createService = createAsyncThunk(
//   "services/create",
//   async (serviceData, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(API_URL, serviceData);
//       return res.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

// // READ ALL
// export const fetchServices = createAsyncThunk(
//   "services/fetchAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(API_URL);
//       return res.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

// // READ ONE
// export const fetchServiceById = createAsyncThunk(
//   "services/fetchById",
//   async (id, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(`${API_URL}/${id}`);
//       return res.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

// // UPDATE
// export const updateService = createAsyncThunk(
//   "services/update",
//   async ({ id, updatedData }, { rejectWithValue }) => {
//     try {
//       const res = await axios.put(`${API_URL}/${id}`, updatedData);
//       return res.data.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

// // DELETE
// export const deleteService = createAsyncThunk(
//   "services/delete",
//   async (id, { rejectWithValue }) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       return id;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data?.message || error.message
//       );
//     }
//   }
// );

// /* =========================
//    SLICE
// ========================= */

// const serviceSlice = createSlice({
//   name: "services",
//   initialState: {
//     services: [],
//     service: null,
//     loading: false,
//     error: null
//   },
//   reducers: {
//     clearService(state) {
//       state.service = null;
//     },
//     clearError(state) {
//       state.error = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder

//       /* CREATE */
//       .addCase(createService.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createService.fulfilled, (state, action) => {
//         state.loading = false;
//         // ✅ FIX: keep first-added service first
//         state.services.push(action.payload);
//       })
//       .addCase(createService.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       /* READ ALL */
//       .addCase(fetchServices.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchServices.fulfilled, (state, action) => {
//         state.loading = false;
//         state.services = action.payload;
//       })
//       .addCase(fetchServices.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       /* READ ONE */
//       .addCase(fetchServiceById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchServiceById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.service = action.payload;
//       })
//       .addCase(fetchServiceById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       /* UPDATE */
//       .addCase(updateService.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateService.fulfilled, (state, action) => {
//         state.loading = false;
//         state.services = state.services.map((item) =>
//           item._id === action.payload._id ? action.payload : item
//         );
//         state.service = action.payload;
//       })
//       .addCase(updateService.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       /* DELETE */
//       .addCase(deleteService.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteService.fulfilled, (state, action) => {
//         state.loading = false;
//         state.services = state.services.filter(
//           (item) => item._id !== action.payload
//         );
//       })
//       .addCase(deleteService.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   }
// });

// /* =========================
//    EXPORTS
// ========================= */

// export const { clearService, clearError } = serviceSlice.actions;
// export default serviceSlice.reducer;

// src/redux/slices/serviceSlice.ts

import {
  createSlice,
  createAsyncThunk,
  PayloadAction
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

/* =========================
   API CONFIG
========================= */

const API_URL =
  "https://siddhant-web.onrender.com/api/services";

/* =========================
   TYPES
========================= */

export interface Service {
  _id: string;

  title: string;
  description: string;

  shortDescription?: string;

  icon?: string;
  image?: string;

  technologies?: string[];

  features?: string[];

  price?: number | string;

  category?: string;

  status?: "active" | "inactive";

  featured?: boolean;

  createdAt?: string;
  updatedAt?: string;
}

export interface ServicePayload {
  title: string;
  description: string;

  shortDescription?: string;

  icon?: string;
  image?: string;

  technologies?: string[];

  features?: string[];

  price?: number | string;

  category?: string;

  status?: "active" | "inactive";

  featured?: boolean;
}

export interface UpdateServicePayload {
  id: string;
  updatedData: ServicePayload;
}

export interface ApiError {
  message: string;
}

export interface SingleServiceResponse {
  data: Service;
}

export interface ServicesResponse {
  data: Service[];
}

export interface ServiceState {
  services: Service[];
  service: Service | null;

  loading: boolean;

  error: string | null;
}

/* =========================
   ERROR HELPER
========================= */

const getErrorMessage = (
  error: unknown
): string => {
  const err = error as AxiosError<ApiError>;

  return (
    err.response?.data?.message ||
    err.message ||
    "Something went wrong"
  );
};

/* =========================
   ASYNC THUNKS (CRUD)
========================= */

/* ---------- CREATE ---------- */

export const createService = createAsyncThunk<
  Service,
  ServicePayload,
  { rejectValue: string }
>(
  "services/create",
  async (serviceData, { rejectWithValue }) => {
    try {
      const res = await axios.post<SingleServiceResponse>(
        API_URL,
        serviceData
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error)
      );
    }
  }
);

/* ---------- READ ALL ---------- */

export const fetchServices = createAsyncThunk<
  Service[],
  void,
  { rejectValue: string }
>(
  "services/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get<ServicesResponse>(
        API_URL
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error)
      );
    }
  }
);

/* ---------- READ ONE ---------- */

export const fetchServiceById = createAsyncThunk<
  Service,
  string,
  { rejectValue: string }
>(
  "services/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get<SingleServiceResponse>(
        `${API_URL}/${id}`
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error)
      );
    }
  }
);

/* ---------- UPDATE ---------- */

export const updateService = createAsyncThunk<
  Service,
  UpdateServicePayload,
  { rejectValue: string }
>(
  "services/update",
  async (
    { id, updatedData },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.put<SingleServiceResponse>(
        `${API_URL}/${id}`,
        updatedData
      );

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error)
      );
    }
  }
);

/* ---------- DELETE ---------- */

export const deleteService = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>(
  "services/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(
        getErrorMessage(error)
      );
    }
  }
);

/* =========================
   INITIAL STATE
========================= */

const initialState: ServiceState = {
  services: [],
  service: null,

  loading: false,

  error: null
};

/* =========================
   SLICE
========================= */

const serviceSlice = createSlice({
  name: "services",

  initialState,

  reducers: {
    /* ---------- CLEAR CURRENT SERVICE ---------- */

    clearService: (state) => {
      state.service = null;
    },

    /* ---------- CLEAR ERROR ---------- */

    clearError: (state) => {
      state.error = null;
    }
  },

  extraReducers: (builder) => {
    builder

      /* =========================================
         CREATE
      ========================================= */

      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        createService.fulfilled,
        (
          state,
          action: PayloadAction<Service>
        ) => {
          state.loading = false;

          // Keep first-added service first
          state.services.push(action.payload);
        }
      )

      .addCase(createService.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          "Failed to create service";
      })

      /* =========================================
         READ ALL
      ========================================= */

      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchServices.fulfilled,
        (
          state,
          action: PayloadAction<Service[]>
        ) => {
          state.loading = false;

          state.services = action.payload;
        }
      )

      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          "Failed to fetch services";
      })

      /* =========================================
         READ ONE
      ========================================= */

      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        fetchServiceById.fulfilled,
        (
          state,
          action: PayloadAction<Service>
        ) => {
          state.loading = false;

          state.service = action.payload;
        }
      )

      .addCase(fetchServiceById.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          "Failed to fetch service";
      })

      /* =========================================
         UPDATE
      ========================================= */

      .addCase(updateService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        updateService.fulfilled,
        (
          state,
          action: PayloadAction<Service>
        ) => {
          state.loading = false;

          state.services = state.services.map(
            (item) =>
              item._id === action.payload._id
                ? action.payload
                : item
          );

          state.service = action.payload;
        }
      )

      .addCase(updateService.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          "Failed to update service";
      })

      /* =========================================
         DELETE
      ========================================= */

      .addCase(deleteService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        deleteService.fulfilled,
        (
          state,
          action: PayloadAction<string>
        ) => {
          state.loading = false;

          state.services = state.services.filter(
            (item) =>
              item._id !== action.payload
          );

          // Clear selected service if deleted
          if (
            state.service &&
            state.service._id === action.payload
          ) {
            state.service = null;
          }
        }
      )

      .addCase(deleteService.rejected, (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          "Failed to delete service";
      });
  }
});

/* =========================
   EXPORTS
========================= */

export const {
  clearService,
  clearError
} = serviceSlice.actions;

export default serviceSlice.reducer;