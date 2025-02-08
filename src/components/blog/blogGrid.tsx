'use client';

import Image from 'next/image';
import Link from 'next/link';

const BlogCard: React.FC<{ image: string; date: string; month: string; category: string; author: string; comments: string; title: string; description: string; link: string; }> = ({ image, date, month, category, author, comments, title, description, link }) => {
    return (
        <div className="overflow-hidden transition duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl hover:scale-105">
            <div className="relative">
                <Image src={image} alt="Blog Image" width={300} height={200} className="w-full h-[200px] object-cover" />
                <div className="absolute px-2 py-1 text-center rounded-md bottom-2 left-2 bg-white/90">
                    <p className="text-sm font-bold text-black">{date}</p>
                    <p className="text-xs text-gray-500 uppercase">{month}</p>
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{category}</span>
                    <span>By {author}</span>
                    <span>{comments} Comments</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-tight text-black">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                <Link href={link} className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-500">
                    Read More
                </Link>
            </div>
        </div>
    );
};

const BlogGrid = () => {
    const blogs = [
        {
            image: '/images/nutrition-blogs/food7.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/1',
        },
        {
            image: '/images/nutrition-blogs/food6.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/2',
        },
        {
            image: '/images/nutrition-blogs/food6.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/2',
        },
        {
            image: '/images/nutrition-blogs/food6.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/2',
        },
        {
            image: '/images/nutrition-blogs/food6.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/2',
        },
        {
            image: '/images/nutrition-blogs/food6.png',
            date: '18',
            month: 'Nov',
            category: 'Beans',
            author: 'Admin',
            comments: '65',
            title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
            description: 'Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus.',
            link: '/blog/2',
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
            ))}
        </div>
    );
};

export default BlogGrid;
