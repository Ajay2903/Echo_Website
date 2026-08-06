import Image from "next/image";

type PhoneFrameProps = {
  /** Description of what the screen shows — this is real alt text, not decoration. */
  alt: string;
  className?: string;
  /** The hero phone is above the fold; everything below it lazy-loads. */
  priority?: boolean;
};

export function PhoneFrame({
  alt,
  className,
  priority = false,
}: PhoneFrameProps) {
  return (
    <div className={className}>
      <div className="phone">
        <div className="phone__screen">
          <span className="phone__notch" aria-hidden="true" />
          <Image
            src="/images/sample.jpg"
            alt={alt}
            width={720}
            height={1440}
            sizes="(max-width: 860px) 74vw, 280px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
