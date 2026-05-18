

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://siddhant-web.onrender.com/api/contact";

// /* ===================== SUBMIT CONTACT ===================== */
// export const submitContact = createAsyncThunk(
//   "contact/submit",
//   async (contactData, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(`${API_URL}/submit`, contactData);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || { message: "Failed to send message" }
//       );
//     }
//   }
// );

// /* ===================== ADMIN: GET ALL CONTACTS ===================== */
// export const fetchContacts = createAsyncThunk(
//   "contact/fetchAll",
//   async ({ page = 1, limit = 10, search = "", status = "" }, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(`${API_URL}/admin`, {
//         params: { page, limit, search, status }
//       });
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || { message: "Failed to fetch contacts" }
//       );
//     }
//   }
// );

// /* ===================== ADMIN: MARK AS READ ===================== */
// export const markContactAsRead = createAsyncThunk(
//   "contact/markAsRead",
//   async (id, { rejectWithValue }) => {
//     try {
//       const res = await axios.patch(`${API_URL}/admin/${id}/read`);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || { message: "Failed to update contact" }
//       );
//     }
//   }
// );

// const contactSlice = createSlice({
//   name: "contact",
//   initialState: {
//     // submit
//     loading: false,
//     success: false,
//     message: "",
//     error: null,
//     submittedData: null,

//     // admin
//     contacts: [],
//     pagination: null,
//     adminLoading: false,
//     adminError: null
//   },

// reducers: {
//   resetContactState: (state) => {
//     state.loading = false;
//     state.success = false;
//     state.message = "";
//     state.error = null;
//     state.submittedData = null;
//   },
//   clearError: (state) => {
//     state.error = null;
//   },
//   clearAdminError: (state) => {
//     state.adminError = null;
//   }
// },


//   extraReducers: (builder) => {
//     builder

//       /* ========== SUBMIT CONTACT ========== */
//       .addCase(submitContact.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(submitContact.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.message = action.payload.message;
//         state.submittedData = action.payload.data;
//       })
//       .addCase(submitContact.rejected, (state, action) => {
//         state.loading = false;
//         state.success = false;
//         state.error = action.payload?.message || "Failed to send message";
//       })

//       /* ========== ADMIN FETCH CONTACTS ========== */
//       .addCase(fetchContacts.pending, (state) => {
//         state.adminLoading = true;
//         state.adminError = null;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.adminLoading = false;
//         state.contacts = action.payload.data;
//         state.pagination = action.payload.pagination;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.adminLoading = false;
//         state.adminError = action.payload?.message || "Failed to load contacts";
//       })

//       /* ========== MARK AS READ ========== */
//       .addCase(markContactAsRead.fulfilled, (state, action) => {
//         const updated = action.payload.data;
//         state.contacts = state.contacts.map((item) =>
//           item._id === updated._id ? updated : item
//         );
//       });
//   }
// });

// export const {
//   resetContactState,
//   clearError,
//   clearAdminError
// } = contactSlice.actions;

// export default contactSlice.reducer;

import {
  createSlice,
  createAsyncThunk,
  PayloadAction
} from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

/* ===================== TYPES ===================== */

interface ContactData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface ApiError {
  message: string;
}

interface SubmitContactResponse {
  message: string;
  data: Contact;
}

interface FetchContactsResponse {
  data: Contact[];
  pagination: Pagination;
}

interface MarkAsReadResponse {
  message: string;
  data: Contact;
}

interface FetchContactsParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}

interface ContactState {
  // submit
  loading: boolean;
  success: boolean;
  message: string;
  error: string | null;
  submittedData: Contact | null;

  // admin
  contacts: Contact[];
  pagination: Pagination | null;
  adminLoading: boolean;
  adminError: string | null;
}

/* ===================== API ===================== */

const API_URL = "https://siddhant-web.onrender.com/api/contact";

/* ===================== SUBMIT CONTACT ===================== */

export const submitContact = createAsyncThunk<
  SubmitContactResponse,
  ContactData,
  { rejectValue: ApiError }
>(
  "contact/submit",
  async (contactData, { rejectWithValue }) => {
    try {
      const res = await axios.post<SubmitContactResponse>(
        `${API_URL}/submit`,
        contactData
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      return rejectWithValue(
        err.response?.data || {
          message: "Failed to send message"
        }
      );
    }
  }
);

/* ===================== ADMIN: GET ALL CONTACTS ===================== */

export const fetchContacts = createAsyncThunk<
  FetchContactsResponse,
  FetchContactsParams,
  { rejectValue: ApiError }
>(
  "contact/fetchAll",
  async (
    { page = 1, limit = 10, search = "", status = "" },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.get<FetchContactsResponse>(
        `${API_URL}/admin`,
        {
          params: {
            page,
            limit,
            search,
            status
          }
        }
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      return rejectWithValue(
        err.response?.data || {
          message: "Failed to fetch contacts"
        }
      );
    }
  }
);

/* ===================== ADMIN: MARK AS READ ===================== */

export const markContactAsRead = createAsyncThunk<
  MarkAsReadResponse,
  string,
  { rejectValue: ApiError }
>(
  "contact/markAsRead",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.patch<MarkAsReadResponse>(
        `${API_URL}/admin/${id}/read`
      );

      return res.data;
    } catch (error) {
      const err = error as AxiosError<ApiError>;

      return rejectWithValue(
        err.response?.data || {
          message: "Failed to update contact"
        }
      );
    }
  }
);

/* ===================== INITIAL STATE ===================== */

const initialState: ContactState = {
  // submit
  loading: false,
  success: false,
  message: "",
  error: null,
  submittedData: null,

  // admin
  contacts: [],
  pagination: null,
  adminLoading: false,
  adminError: null
};

/* ===================== SLICE ===================== */

const contactSlice = createSlice({
  name: "contact",
  initialState,

  reducers: {
    resetContactState: (state) => {
      state.loading = false;
      state.success = false;
      state.message = "";
      state.error = null;
      state.submittedData = null;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearAdminError: (state) => {
      state.adminError = null;
    }
  },

  extraReducers: (builder) => {
    builder

      /* ========== SUBMIT CONTACT ========== */

      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })

      .addCase(
        submitContact.fulfilled,
        (state, action: PayloadAction<SubmitContactResponse>) => {
          state.loading = false;
          state.success = true;
          state.message = action.payload.message;
          state.submittedData = action.payload.data;
        }
      )

      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error =
          action.payload?.message || "Failed to send message";
      })

      /* ========== ADMIN FETCH CONTACTS ========== */

      .addCase(fetchContacts.pending, (state) => {
        state.adminLoading = true;
        state.adminError = null;
      })

      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<FetchContactsResponse>) => {
          state.adminLoading = false;
          state.contacts = action.payload.data;
          state.pagination = action.payload.pagination;
        }
      )

      .addCase(fetchContacts.rejected, (state, action) => {
        state.adminLoading = false;
        state.adminError =
          action.payload?.message || "Failed to load contacts";
      })

      /* ========== MARK AS READ ========== */

      .addCase(
        markContactAsRead.fulfilled,
        (state, action: PayloadAction<MarkAsReadResponse>) => {
          const updated = action.payload.data;

          state.contacts = state.contacts.map((item) =>
            item._id === updated._id ? updated : item
          );
        }
      )

      .addCase(markContactAsRead.rejected, (state, action) => {
        state.adminError =
          action.payload?.message || "Failed to update contact";
      });
  }
});

/* ===================== EXPORTS ===================== */

export const {
  resetContactState,
  clearError,
  clearAdminError
} = contactSlice.actions;

export default contactSlice.reducer;