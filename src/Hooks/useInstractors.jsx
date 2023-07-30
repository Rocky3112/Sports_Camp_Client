import { useQuery } from "react-query";

const useInstractors = () => {
    const {data: instractors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/instractors');
            return res.json();
        }
    })

    return [instractors, loading, refetch]
}

export default useInstractors;