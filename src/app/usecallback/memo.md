# useCallback(fn, dependencies)

- props に関数を渡す場合に、関数の再生成を防ぎレンダリングを防止する

- react では関数の値が変更されなくても毎回レンダリングがされてしまう

---

例）

親で定義している関数を子に渡す場合、

通常は親の state が更新されると関数は毎回再生成される。

useCallback で囲むと dependencies が更新されない限り関数を再生成しない。
