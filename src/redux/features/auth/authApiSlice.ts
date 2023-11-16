import { IAuthenticatedUser, ISignUp } from "@/interfaces";
import { apiSlice } from "@/redux/services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<IAuthenticatedUser, ISignUp>({
      query: userData => ({
        url: '/api/auth/signup',
        method: 'POST',
        body: {
          ...userData,
        }
      }),
    }),
    signIn: builder.mutation({
      query: userCredentials => ({
        url: '/api/auth/signin',
        method: 'POST',
        body: {
          ...userCredentials,
        }
      }),
    })
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
} = authApiSlice;
