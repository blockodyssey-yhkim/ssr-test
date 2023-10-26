import Link from 'next/link';
import Button from '../components/Shared/Atoms/Button';
import CommonHeader from '@/components/Shared/Molecules/Header/CommonHeader';
import Home from '@/app/home';

export default async function Main() {
    return (
        <main>
            <Home />
        </main>
    );
}
