import { ProfileStyle } from './Profile.css';

export default function Profile({
  imageSrc = null,
}: {
  imageSrc?: string | null;
}) {
  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} />
      ) : (
        <img
          className={ProfileStyle}
          style={{ color: 'black' }}
          src="../../../../public/assets/icons/icon_profile.svg"
        />
      )}
    </div>
  );
}
