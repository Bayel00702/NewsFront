import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {getAllChapter} from "../../redux/reducers/chapter";
import {getSubChapter} from "../../redux/reducers/subChapter";
import axios from "../../utils/axios";
import {useNavigate} from "react-router-dom";
import {article} from "../../redux/reducers/defaultArticle";


const AddArticles = () => {

    const {chapter} = useSelector(store => store.chapter)
    const {subchapter} = useSelector(store => store.subchapter)
    const {articleEl} = useSelector(store => store.defaultArticle)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [btn, setBtn] = useState(false);
    const [subChapter, setSubChapter] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState('');
    const [selectedSubchapter, setSelectedSubchapter] = useState('');
    const [gettedImageUrl, setGettedImageUrl] = useState("");



    const onSubmit = (data) => {
        axios.post('/article', { ...data, ...articleEl, image: gettedImageUrl, chapter: selectedChapter, subchapter: selectedSubchapter })
                .then((res) => {
                    dispatch(article(res.data));
                    navigate('/');
                })
                .catch((err) => console.log(err));

    };



    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(event.target.files[0])
    };

    const addImage = async (file) => {
        let formData = new FormData();
        formData.append('file', file);
        await axios.post('/upload', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        ).then(res => {
            setGettedImageUrl(res.data.url)
        })
            .catch(err => console.log(err))
    };


    const {
        register,
        handleSubmit,
        formState :{
            errors
        }

    } = useForm();

    useEffect(() => {
        dispatch(getAllChapter())
    }, []);

    return (
        <section className='add'>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} action="" className="add__form" >
                    <div className="add__images">
                        <h2 className="add__images-title">Add image for article</h2>
                        <input
                            onChange={handleImageChange}
                            accept='image/*'
                            className='add__images-input'
                            type="file"
                        />

                        <button
                            onClick={() => addImage(selectedImage)}
                            type="button"
                            className='add__images-button'
                        >
                            Add
                        </button>
                    </div>

                    <label htmlFor="title" className="add__form-label">
                        <h3 className="add__form-title">Title</h3>
                        <input
                            type="text"
                            className="add__form-input"
                            placeholder='Напишите название своей статьи'
                            {...register('title', {
                                    required: {
                                        message: 'Обязательно к заполнению',
                                        value: true
                                    }
                                }

                            )}
                            id="title"
                        />
                        <p className="add__form-err">{errors.title && errors.title?.message}</p>
                    </label>

                    <label htmlFor="description" className="add__form-label">
                        <h3 className="add__form-title">First Description</h3>
                        <textarea
                            className="add__form-inputDesc"
                            placeholder='Напишите описание своей статьи'
                            {...register('description1', {
                                    required: {
                                        message: 'Обязательно к заполнению',
                                        value: true
                                    }
                                }

                            )}
                            id="description"
                        />
                        <p className="add__form-err">{errors.description1 && errors.description1?.message}</p>

                    </label>

                    <label htmlFor="description" className="add__form-label">
                        <h3 className="add__form-title">Second description</h3>
                        <textarea
                            className="add__form-inputDesc"
                            placeholder='Напишите описание своей статьи'
                            {...register('description2', {
                                    required: {
                                        message: 'Обязательно к заполнению',
                                        value: true
                                    }
                                }
                            )}
                            id="description"
                        />
                        <p className="add__form-err">{errors.description2 && errors.description2?.message}</p>

                    </label>

                    <label htmlFor="description" className="add__form-label">
                        <h3 className="add__form-title">Third description</h3>
                        <textarea
                            className="add__form-inputDesc"
                            placeholder='Напишите описание своей статьи'
                            {...register('description3', {
                                    required: {
                                        message: 'Обязательно к заполнению',
                                        value: true
                                    }
                                }

                            )}
                            id="description"
                        />
                        <p className="add__form-err">{errors.description3 && errors.description3?.message}</p>

                    </label>


                    <label htmlFor="" className="add__form-label">
                        <h3 className="add__form-title">Chapter</h3>
                        <p
                            className="add__form-chapter"
                            onClick={() => {
                                if (setBtn) {
                                    setBtn((prev) => !prev);
                                }
                            }}
                        >
                                Chapter
                        </p>

                        <div className={`add__form-subchapters ${btn ? 'active' : ''}`}>
                            {
                                chapter.map((item) => (
                                    <p {...register('chapter')}
                                       className={`add__subchapter-item ${selectedChapter === item.name ? 'selected' : ''}`}
                                       onClick={() => {
                                           if (setSubChapter) {
                                               setSubChapter((prev) => !prev)
                                           }
                                           dispatch(getSubChapter(item._id))
                                           setSelectedChapter(item.name);
                                       }}
                                       key={item._id}
                                    >{item.name}</p>
                                ))
                            }
                        </div>

                        <div className={`add__subchapter-desc ${subChapter ? 'active' : ''}`}>
                            {
                                subchapter.map((item) => (
                                    <p {...register('subchapter')}
                                       className={`add__subchapter-desc__item ${selectedSubchapter === item.subChapterName ? 'selectedSub': ''}`}
                                       onClick={() => {
                                           setSelectedSubchapter(item.subChapterName)
                                       }}
                                       key={item._id}
                                    >{item.subChapterName}</p>
                                ))
                            }
                        </div>
                    </label>

                    <button className="add__form-submit" type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddArticles;