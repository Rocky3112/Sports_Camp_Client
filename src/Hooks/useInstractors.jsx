import { useQuery } from "react-query";

// import { useQuery } from "@tanstack/react-query";

const useInstractors = () => {
    const {data: instractors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://sports-camp-server-lemon.vercel.app/instractors');
            return res.json();
        }
    })

    return [instractors, loading, refetch]
}

export default useInstractors;