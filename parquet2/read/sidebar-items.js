initSidebarItems({"fn":[["decompress","Decompresses the page, using `buffer` for decompression. If `page.buffer.len() == 0`, there was no decompression and the buffer was moved. Else, decompression took place."],["filter_row_groups","Filters row group metadata to only those row groups, for which the predicate function returns true"],["get_page_iterator",""],["get_page_stream","Returns a stream of compressed data pages"],["read_metadata","Reads a file’s metadata."],["read_metadata_async",""]],"mod":[["levels",""]],"struct":[["Decompressor","Decompressor that allows re-using the page buffer of [`PageIterator`]"],["PageIterator","A page iterator iterates over row group’s pages. In parquet, pages are guaranteed to be contiguously arranged in memory and therefore must be read in sequence."]],"trait":[["StreamingIterator","An interface for dealing with streaming iterators."]],"type":[["PageFilter","Type declaration for a page filter"]]});