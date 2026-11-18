import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditWide: ForwardRefExoticComponent<ChatEditWideProps & RefAttributes<SVGSVGElement>>;

export default ChatEditWide;
export { ChatEditWide };
