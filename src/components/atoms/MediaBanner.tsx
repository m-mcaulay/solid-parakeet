interface MediaBannerProps {
  src: string;
  alt: string;
}

const MediaBanner = ({ src, alt }: MediaBannerProps) => {
  return <img src={src} alt={alt} className="w-full h-48 object-cover" />;
};

export default MediaBanner;
