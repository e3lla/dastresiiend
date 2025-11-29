import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArticles, selectArticlesStatus, selectArticlesError, fetchArticles } from './LastArticleSlice';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './LastArticle.css';
import { Pagination, Autoplay } from 'swiper/modules';

export default function LastArticle() {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const status = useSelector(selectArticlesStatus);
  const error = useSelector(selectArticlesError);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (status === 'loading') return <div className="text-center py-8">در حال بارگذاری مقالات...</div>;
  if (status === 'failed') return <div className="text-center py-8 text-red-500">خطا: {error}</div>;

  const ArticleCard = ({ article }) => (
    <div className="item flex flex-col w-[296px] justify-between rounded-xl shadow-md bg-white mb-2 hover-title">
      <img className="mx-auto w-auto rounded-xl mb-2" alt={article.title} src={article.image} />
      <h3 className="leading-7 text-xs md:text-sm overflow-hidden en_num h-14 px-4 flex items-center justify-center">
        {article.title}
      </h3>
    </div>
  );

  return (
    <>
      <h2 className="text-center text-2xl font-bold mt-7">آخرین مقالات</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{ 340: { slidesPerView: 1 }, 740: { slidesPerView: 2 }, 840: { slidesPerView: 3 }, 968: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        modules={[Pagination, Autoplay]}
        className="mySwiper last-swiper"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
