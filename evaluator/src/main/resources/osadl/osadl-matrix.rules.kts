enum class Compatibility {
    YES,
    NO,
    UNDEFINED;

    companion object {
        fun fromString(value: String): Compatibility =
            when (value) {
                "Yes" -> YES
                "No" -> NO
                else -> UNDEFINED
            }
    }
}

val matrix = mutableMapOf<Pair<String, String>, Compatibility>()

javaClass.getResourceAsStream("osadl-matrix.csv").bufferedReader().useLines { lines ->
    val rowIterator = lines.iterator()
    val columnHeaders = rowIterator.next().split(',').drop(1)

    while (rowIterator.hasNext()) {
        val cellIterator = rowIterator.next().split(',').iterator()
        val rowHeader = cellIterator.next()
        columnHeaders.forEach { columnHeader ->
            matrix[columnHeader to rowHeader] = Compatibility.fromString("")
        }
    }
}
