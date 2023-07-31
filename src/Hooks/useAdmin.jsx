import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useAdmin = () => {
    const [axiosSecure] = useAxios();
    const {user, loading} = useContext(AuthContext);
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;