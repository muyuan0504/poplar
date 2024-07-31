import React, { useRef, useEffect } from 'react'
// import ReactQuill from 'react-quill'
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import styles from './style/quill.module.scss'

let quillCtx

const QuillEditor = () => {
    const editorQuill = useRef(null)
    const isMounted = useRef(false) // 标志变量
    /**
     * 在 React 18 及以上版本中，由于 React 严格模式（Strict Mode）默认启用，useEffect 的回调在开发模式下会被调用两次。
     * 这是 React 用于帮助开发者识别和修复副作用的潜在问题。
     * 在生产环境中，这种行为不会发生
     */
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            const editorEle = editorQuill.current
            if (editorEle) {
                const options = {
                    theme: 'snow',
                    debug: 'false',
                    formats: ['italic'],
                    modules: {
                        toolbar: true,
                    },
                    placeholder: 'Compose an epic...',
                }
                quillCtx = new Quill('#editorQuill', options)
            }
            console.error('---------- aiden --------------', editorEle)
        }
    }, []) // 空依赖数组表示只在组件挂载和卸载时执行

    const submit = () => {
        const content = quillCtx.getContents()
        const textLen = quillCtx.getLength()
        console.error('---------- content --------------', content)
        console.error('---------- textLen --------------', textLen)
    }

    return (
        <div className={styles.editorWrapper}>
            <div className='bold'>quill</div>
            <div ref={editorQuill} id='editorQuill'></div>
            <div onClick={submit}>发送</div>
        </div>
    )
}

export default QuillEditor
