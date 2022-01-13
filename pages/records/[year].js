import { useRouter } from 'next/router';
import SeasonDetails from '../../components/SeasonDetail/SeasonDetail';


function RecordsYear(props) {
    const router = useRouter();
    const year = router.query.year;
    //send a request to backend API
    // to fetch record item with for certain year
    return (
        <>
        <h1>The records for {year} </h1>
        <SeasonDetails />
        </>
    );

}

export default RecordsYear;
