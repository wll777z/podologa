import type { SVGProps } from 'react';
export function Arrow(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" {...props}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}
export function Mark(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 40 48" width="32" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}><path d="M20 45V13M20 32C7 32 4 22 5 15c11 0 15 7 15 17ZM20 24C33 24 36 13 35 6c-11 0-15 8-15 18ZM20 15C11 11 13 4 17 1c7 5 7 10 3 14Z" /></svg>;
}
