import Image from 'next/image';

export const Header = () => {
  return (
    <div className="app-wrapper-header">
      <div className="app-container">
        <div className="app-wrap-cover">

          <div className="app-logo">
            <Image src="/logo.svg" alt="Indeed" width={120} height={34} />
          </div>

        </div>
      </div>
    </div>
  )
}
