# useEffect(setup, dependencies?)

- マウント後に発火される（マウント →useEffect で 2 回発火）

- useEffect 内で state の更新をしない限り、再レンダリングされない

- どの state が更新されたらレンダリングするかを引数に指定する

---
