import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function StartupCard({ post }: { post: StartupTypeCard }) {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">{formatDate(new Date())}</p>

                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">123</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href="">
                        <p className="text-16-medium line-clamp-1">Dat</p>
                    </Link>

                    <Link href="">
                        <h3 className="text-26-semibold line-clamp-1">
                            We Robot
                        </h3>
                    </Link>
                </div>

                <Link href="">
                    <Image
                        src="https://placehold.co/48x48"
                        alt="placeholder"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href="startup/1">
                <p className="startup-card_desc">This is description</p>

                <Image
                    src="https://placehold.co/600x400"
                    alt="placeholder"
                    width={600}
                    height={400}
                />
            </Link>
        </li>
    );
}

export default StartupCard;
