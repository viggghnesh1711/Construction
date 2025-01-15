"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
import { CldUploadWidget } from 'next-cloudinary';
import Back from '@/components/Back';

const Page = ({ params }) => {
    const { ID } = params;
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [imageName, setImageName] = useState('');
    const [projecturl, setProjecturl] = useState('');

    // Fetch project data on component mount
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/project', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ ID })
                });
                if (response.ok) {
                    const result = await response.json();
                    // console.log(result)
                    setProjecturl(result.imgurl);
                    if (result) {
                        setTitle(result.title || '');
                        setDesc(result.desc || '');
                        setImageUrl(result.imgurl || '');
                    }
                } else {
                    alert("Failed to fetch project data");
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        // console.log(projecturl)
        fetchProjects();
    }, [ID]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Use existing image URL if no new image is uploaded
        const finalImageUrl = imageUrl || project.imgurl;

        const response = await fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Corrected header
            },
            body: JSON.stringify({ title, desc, imageUrl: finalImageUrl, ID })
        });

        if (response.ok) {
            const result = await response.json();
            toast.success(result.message);
            router.push('/Dashboard');
        } else {
            const result = await response.json();
            toast.error(result.message);
        }
    };

    return (
        <div className="flex flex-col items-center gap-20 min-h-screen bg-gray-100">
            
            <div className="w-full p-4">
                <Back /> {/* This will be at the top */}
            </div>
            <Toaster />
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Update Your Project</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="imageUpload">
                            Image Upload
                        </label>
                        <CldUploadWidget
    uploadPreset="construction"
    onSuccess={(result) => {
        setImageUrl(result.info.secure_url);
        const uploadedImageName = result.info.original_filename; // Get the original filename
        setImageName(uploadedImageName); // Update state with the image name
        console.log('Uploaded Image URL:', result.info.secure_url);
    }}
>
    {({ open }) => (
        <button 
            type="button" // Set type to "button" to prevent form submission
            className='px-3 py-2 bg-blue-500 rounded-lg text-slate-50'
            onClick={() => open()}
        >
            Upload an Image
        </button>
    )}
</CldUploadWidget>
                        {/* Displaying the uploaded image name */}
                        {imageName && (
                            <span className="ml-4 text-red-500">
                                Uploaded Image: {imageName}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            placeholder="Enter project title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
                            placeholder="Enter project description"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Page;
