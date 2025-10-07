import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const cn = (...inputs) => {
return twMerge(clsx(inputs)); 
} 
//this function is used to merge tailwind css contents in our document, when the styles are become too large