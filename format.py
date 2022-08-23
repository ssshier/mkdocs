def format(path: str):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    content = (
        content.replace("。\n", "\n")
        .replace("。", ". ")
        .replace("，", ", ")
        .replace("：", ": ")
        .replace("；", "; ")
        .replace("、", ", ")
        .replace("？", "\? ")
        .replace("（", " (")
        .replace("）", ")")
    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


if __name__ == "__main__":
    import sys

    p = sys.argv[1]
    format(p)
