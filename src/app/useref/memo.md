# useRef(initialValue)

- コンポーネントの初回レンダリング時に初期化される

- マウント後に useRef.current にアクセスできる

- useRef の値は更新されてもレンダリングされない

- 更新した useRef.current を反映するには useEffect などレンダリングが発火される機能に含める

---
