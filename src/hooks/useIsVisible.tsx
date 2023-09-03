'use client'

import {DependencyList, RefObject, useEffect} from "react";

export const useIsVisible = (ref: RefObject<HTMLElement>, callback: () => void, deps: DependencyList = []) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        callback();
                    }
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
                return () => {
                    observer.disconnect();
                };
            }
        }
    }, [ref, ...deps]);
}