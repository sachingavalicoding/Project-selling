// AddProjectForm.js
import { useState } from 'react';
import { Client, Storage, Databases, ID } from 'appwrite';
import { useProductContext } from '../../contexts/ProductContext';

const AddProjectForm = () => {
    const [projectData, setProjectData] = useState({
        title: '',
        disc: '',
        languages: '',
        sellerName: '',
        helpemail: '',
        zipUrl: null,
        imageUrl: null,
    });

    const { addProduct } = useProductContext();

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        setProjectData((prevData) => ({ ...prevData, [type]: file }));
    };

    const handleInputChange = (e, fieldName) => {
        setProjectData((prevData) => ({ ...prevData, [fieldName]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Initialize Appwrite client and storage
            const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('65ac1e1af0ee05abe0ef');
            const storage = new Storage(client);
            const databases = new Databases(client);


            const formData = new FormData();
            formData.append('imageUrl', projectData.imageUrl);
            formData.append('zipUrl', projectData.zipUrl);

            // Upload image and project zip to Appwrite storage
            const [imageUploadResponse, zipUploadResponse] = await Promise.all([
                storage.createFile('65aca0f0049956fc0b10', formData.get('imageUrl'), formData.get('imageUrl').name),
                storage.createFile('65ad1292f1fe82f61575', formData.get('zipUrl'), formData.get('zipUrl').name),
            ]);

            const ImgUrl = imageUploadResponse['$permissions']['read'];
            const ZipUrl = zipUploadResponse['$permissions']['read'];

            // Add the project data to the Databases
            const response = await databases.createDocument('65ad12c754890e6533c3', '65ad132c4370b6b059cf', ID.unique(), {
                title: projectData.title,
                disc: projectData.disc,
                languages: projectData.languages,
                sellerName: projectData.sellerName,
                helpemail: projectData.helpemail,
                ImgUrl,
                ZipUrl,
            });

            console.log('Project added to Databases:', response);

            // Add the project to the context (you may use your preferred state management here)
            addProduct(projectData);

            // Optionally, you can clear the form or show a success message
            setProjectData({
                title: '',
                disc: '',
                languages: '',
                sellerName: '',
                helpemail: '',
                zipUrl: null,
                imageUrl: null,
            });
        } catch (error) {
            console.error('Error adding project:', error);
            // Handle error, show an error message, etc.
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Project</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Title</label>
                <input
                    type="text"
                    value={projectData.title || ''}
                    onChange={(e) => handleInputChange(e, 'title')}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Description</label>
                <textarea
                    value={projectData.disc || ''}
                    onChange={(e) => handleInputChange(e, 'disc')}
                    className="mt-1 p-2 w-full border rounded-md"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Language</label>
                <input
                    type="text"
                    value={projectData.languages || ''}
                    onChange={(e) => handleInputChange(e, 'languages')}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">User Name</label>
                <input
                    type="text"
                    value={projectData.sellerName || ''}
                    onChange={(e) => handleInputChange(e, 'sellerName')}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">User Email</label>
                <input
                    type="email"
                    value={projectData.helpemail || ''}
                    onChange={(e) => handleInputChange(e, 'helpemail')}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Image</label>
                <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'imageUrl')} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Project Zip</label>
                <input type="file" accept=".zip" onChange={(e) => handleFileChange(e, 'zipUrl')} className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Add Project
            </button>
        </form>
    );
};

export default AddProjectForm;
