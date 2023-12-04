import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';
// import { useQuery } from '@tanstack/react-query';
import { useQuery } from 'react-query';
const useSelect = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxios();
    const { refetch, data: select = [] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data;
        },
    })

    return [select, refetch]

}
export default useSelect;