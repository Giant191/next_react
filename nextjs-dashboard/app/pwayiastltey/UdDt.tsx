import {
    fetchUpdateI
} from '@/app/lib/data';

export default async function UdDt() {
    const date = new Date();
    const latestInvoices = await fetchUpdateI(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    return(
        <></>
    );
}
