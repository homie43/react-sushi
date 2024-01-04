import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={0}
        width={230}
        height={387}
        viewBox='0 0 230 387'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='550' y='569' rx='3' ry='3' width='67' height='11' />
        <rect x='474' y='36' rx='10' ry='10' width='150' height='132' />
        <rect x='627' y='109' rx='3' ry='3' width='150' height='15' />
        <rect x='618' y='-278' rx='3' ry='3' width='93' height='15' />
        <rect x='337' y='113' rx='9' ry='9' width='80' height='24' />
        <rect x='5' y='399' rx='0' ry='0' width='130' height='36' />
        <rect x='231' y='364' rx='0' ry='0' width='43' height='37' />
        <rect x='6' y='5' rx='5' ry='5' width='220' height='204' />
        <rect x='17' y='264' rx='5' ry='5' width='172' height='43' />
        <rect x='25' y='348' rx='5' ry='5' width='55' height='19' />
        <rect x='95' y='342' rx='5' ry='5' width='124' height='35' />
        <rect x='16' y='222' rx='5' ry='5' width='194' height='31' />
    </ContentLoader>
);

export default Skeleton;
