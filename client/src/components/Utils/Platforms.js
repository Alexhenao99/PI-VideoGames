
// Images
import xbox from '../../Images/Platforms/xbox.png';
import playstation from '../../Images/Platforms/playstation.png';
import nintendo from '../../Images/Platforms/nintendo.png';
import pc from '../../Images/Platforms/pc.png';
import android from '../../Images/Platforms/android.png';


export const platforms = ( platforms ) => {
    return(
        // eslint-disable-next-line array-callback-return
        platforms.map( ( platform, i ) => {
            switch (platform) {
                case 'Xbox':
                    return <img className='logoPlatform' src={ xbox } alt="Logo Xbox" key={ i }/>
                case 'PlayStation':
                    return <img className='logoPlatform' src={ playstation } alt="Logo Playstation" key={ i }/>
                case 'Nintendo':
                    return <img className='logoPlatform' src={ nintendo } alt="Logo Nintendo" key={ i }/>
                case 'Pc':
                    return <img className='logoPlatform' src={ pc } alt="Logo Pc" key={ i }/>
                case 'Android':
                    return <img className='logoPlatform' src={ android } alt="Logo Android" key={ i }/>
                default:
                break;
            }
        })
    )
}