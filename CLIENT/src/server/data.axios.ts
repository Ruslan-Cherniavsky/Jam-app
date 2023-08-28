import axiosInstance from "./index.axios";

const dataAxios: {
  dataFetch: () => Promise<any>;
  jemerCardDataFetch: (id: any) => Promise<any>;
  userDataFetch: () => Promise<any>;
} = {
  dataFetch: async () => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:3500/users/getallusers`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },
  jemerCardDataFetch: async (id) => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:3500/users/getjemercarddatabyid/${id}`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },
  userDataFetch: async () => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:3500/usercheck`
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default dataAxios;
