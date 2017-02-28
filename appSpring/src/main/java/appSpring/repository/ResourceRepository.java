package appSpring.repository;

import java.util.List;

import entity.Genre;
import entity.Resource;
import entity.ResourceType;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Integer> {

	List<Resource> findByTitle(String title);

	List<Resource> findByAuthor(String author);

	List<Resource> findByEditorial(String editorial);

	List<Resource> findByGenre(Genre genre);

	Page<Resource> findByResourceType(ResourceType productType, Pageable page);

}
