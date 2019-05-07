package umcs.ta.Library.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import umcs.ta.Library.model.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);

    Boolean existsByUsername(String username);
}