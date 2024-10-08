import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.1.45:7781/api/",
    }),
    endpoints: (builder) => ({
        getSlider: builder.query({
            query: () => "get-slider",
        }),

        getBrandLogo: builder.query({
            query: () => "get-brands",
        }),

        getPackages: builder.query({
            query: () => "get-packages",
        }),

        getTestimonial: builder.query({
            query: () => "get-testimonial",
        }),

        getItenries: builder.query({
            query: (id) => `get-particular-itenary/${id}`,
        }),

        getItenariesDetails: builder.query({
            query: (id) => `get-all-details-itenary/${id}`,
        }),

        getCitiesListing: builder.query({
            query: (city) => `get-all-cities?city=${city}`,
        }),

        // Adding the POST mutation
        contactUsPost: builder.mutation({
            query: (contactData) => ({
                url: "contact-us-post",
                method: "POST",
                body: contactData,
            }),
        }),
        getLocationListing: builder.query({
            query: () => "get-branch-listing",
        }),
    }),
});

export const { useGetSliderQuery, useGetBrandLogoQuery, useGetPackagesQuery, useGetTestimonialQuery, useGetItenriesQuery, useGetItenariesDetailsQuery, useGetCitiesListingQuery, useContactUsPostMutation, useGetLocationListingQuery} = myApi;
