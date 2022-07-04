import { useCallback, useEffect, useRef } from "react"

function useDebounce(cb: Function, deps: any[] = [], delay = 500) {
    const timeout = useRef<NodeJS.Timeout>()
    const callback = useRef(cb)

    useEffect(() => {
        callback.current = cb
    }, [cb])

    return useCallback(
        (...args: any[]) => {
            clearTimeout(timeout.current)

            timeout.current = setTimeout(() => {
                callback.current(...args)
            }, delay)
        },
        [...deps, delay]
    )
}

export default useDebounce
