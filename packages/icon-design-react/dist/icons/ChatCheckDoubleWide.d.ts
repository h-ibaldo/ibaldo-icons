import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckDoubleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckDoubleWide: ForwardRefExoticComponent<ChatCheckDoubleWideProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckDoubleWide;
export { ChatCheckDoubleWide };
