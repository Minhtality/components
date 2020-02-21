/** @module Portal */
import React, {FC} from 'react';
import {createPortal} from 'react-dom';
import {usePortal} from './Portal.hooks';

type PortalProps = {
  /* Child components that will get appended to the portal. */
  children: React.ReactNode;
};

/** Creates a React portal. */
const Portal: FC<PortalProps> = ({children}: PortalProps) => {
  const target = usePortal();

  return target ? createPortal(children, target) : null;
};

export default Portal;
