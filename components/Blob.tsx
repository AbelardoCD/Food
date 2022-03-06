import * as React from 'react';
import { SVGProps } from 'react';

const BlobSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
    >
        <path
            fill="#E86565"
            d="M157.2 81c5.6 17.7-9 41.5-29 55.5-20.1 14-45.6 18.2-64.5 6.2-19-12.1-31.5-40.4-24.3-60.2 7.1-19.7 33.9-30.8 60.1-30.6 26.3.1 52.1 11.5 57.7 29.1Z"
        />
    </svg>
);

export default BlobSvg;
